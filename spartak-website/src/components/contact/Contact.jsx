import styles from './Contact.module.css';

import nameLabel from '/public/name.png';
import emailLabel from '/public/email.png';
import messageLabel from '/public/message.png';
import sendBtnImage from '/public/send-btn.png';

export function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.nameInputContainer}>
        <div className={styles.nameLabel}>
          <label htmlFor="nameInput">
            <img
              src={nameLabel}
              alt="Name label"
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
              src={emailLabel}
              alt="Email label"
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
              src={messageLabel}
              alt="Message label"
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
              src={sendBtnImage}
              alt="Send button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
