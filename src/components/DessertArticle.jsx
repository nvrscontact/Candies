import Button1 from "./subcomponents/Button1"

function DessertArticle({ title, price, subtitle, img, flavor1, flavor2, flavor3, flavor4, star1, star2, star3, star4, star5, reviews, paragraph }) {
  return (
    <>

      <article className="dessertArticle">

        <header>

          <section>
            <h1>{title}</h1>
            <span>{subtitle}</span>
          </section>
          <span>{price}</span>

        </header>

        <div>
          <section className="degraded"></section>

          <img src={img} alt="" />

          <ul>
            <li>{flavor1}</li>
            <li>{flavor2}</li>
            <li>{flavor3}</li>
            <li>{flavor4}</li>
          </ul>

        </div>

        <footer>
          <span className="line"></span>
            
            <div>
              <section>
                <img src={star1} alt="" />
                <img src={star2} alt="" />
                <img src={star3} alt="" />
                <img src={star4} alt="" />
                <img src={star5} alt="" />
              </section>
              <span>{reviews}</span>
            </div>

          <span className="line"></span>
        </footer>


        <p>{paragraph}</p>


        <Button1 url="hh" msg={"Place Order"} />

      </article>
    </>

  )
}

export default DessertArticle