function App() {
  return (
    <div>
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cute Cat and HTTP </h1>
          </div>
        </div>
      </header>
      <main>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered is-multiline">
              <div className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="https://http.cat/202"
                        alt="cute dog"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
        <p>このWebサイトは、日本大学文理学部情報科学科 Webプログラミングの演習課題である。</p>
          <p>Cat images are retrieved from http cats</p>
          <p>
            <a href="https://httpcats.com/">Donate to http cats</a>
          </p>
          <p>5421001 斉藤響</p>
        </div>
      </footer>
    </div>
  );
}

export default App;