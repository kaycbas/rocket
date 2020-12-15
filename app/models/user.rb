# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    
    attr_reader :password

    after_initialize :ensure_session_token

    has_many :saves,
        foreign_key: :user_id,
        class_name: :Save

    has_many :saved_articles,
        through: :saves,
        source: :article

    has_many :listed_saves, -> { where archived: false},
        class_name: :Save,
        dependent: :destroy

    has_many :listed_articles,
        through: :listed_saves,
        source: :article

    has_many :archived_saves, -> { where archived: true},
        class_name: :Save

    has_many :archived_articles,
        through: :archived_saves,
        source: :article

    has_many :favorites,
        foreign_key: :user_id,
        class_name: :Favorite

    has_many :favorite_articles,
        through: :favorites,
        source: :article

    has_many :hides,
        foreign_key: :user_id,
        class_name: :Hide

    has_many :hidden_articles,
        through: :hides,
        source: :article

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
        end
        self.session_token
    end
end
