import styles from './Contact.module.css';

export function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.nameInputContainer}>
        <div className={styles.nameLabel}>
          <label htmlFor="">
            <img
              src="name.png"
              alt=""
            />
          </label>
        </div>
        <div className={styles.nameInput}>
          <input type="text" />
        </div>
      </div>
      <div className={styles.emailInputContainer}>
        <div className={styles.emailLabel}>
          <label htmlFor="">
            <img
              src="email.png"
              alt=""
            />
          </label>
        </div>
        <div className={styles.emailInput}>
          <input type="text" />
        </div>
      </div>
      <div className={styles.messageInputContainer}>
        <div className={styles.messageLabel}>
          <label htmlFor="">
            <img
              src="message.png"
              alt=""
            />
          </label>
        </div>
        <div className={styles.messageInput}>
          <textarea
            name="message"
            id="messageInput"
            maxLength={220}
          ></textarea>
        </div>

        <div className={styles.sendBtnContainer}>
          <button
            type="submit"
            className={styles.sendBtn}
          >
            <img
              src="send-btn.png"
              alt="Send button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
