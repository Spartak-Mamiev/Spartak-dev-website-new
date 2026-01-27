import styles from './Contact.module.css';

import nameLabel from '/public/name.png';
import emailLabel from '/public/email.png';
import messageLabel from '/public/message.png';
import sendBtnImage from '/public/send-btn.png';

export function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '74d45a3a-df42-489a-a6ca-ef0b71a8562c');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(
        "Message recieved, I'll get back to you as soon as posible.",
        event.target.reset(),
      );
    }
  };

  return (
    <form
      className={styles.contactSection}
      onSubmit={onSubmit}
    >
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
          <input
            type="text"
            name="name"
            required
          />
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
          <input
            type="text"
            name="email"
            required
            autoComplete="off"
          />
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
            required
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
    </form>
  );
}
