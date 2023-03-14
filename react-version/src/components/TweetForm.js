function TweetForm() {
  const formText = "What are you humming about?";

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <main className="formContainer">
    <section className="newtweet">
    <form onSubmit={handleSubmit} method="post" action="/tweets" className="newtweet__form">
      <textarea className="form__textarea" name="text" placeholder={formText}></textarea>
      <input onClick={handleClick} type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>
  </main>
  );
}

export default TweetForm;