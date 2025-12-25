import React from 'react'
import DessertArticle from '../components/DessertArticle'

function HomePage() {
  return (
    <>
      <section className='homePage'>

        <DessertArticle
        title="Newest Creation"
        price="$3.89"
        subtitle="sabor a cerezas tropicales"
        img="/img/cupcake_three.png" 
        flavor1="Strawberry"
        flavor2="Blueberry"
        flavor3="Limonade"
        flavor4="Cherry"
        star1="/img/star.svg"
        star2="/img/star.svg" 
        star3="/img/star.svg"
        star4="/img/star.svg"
        star5="/img/star.svg"
        reviews="+23 reviews"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore aperiam voluptatibus aliquam praesentium another vocabulary.
          Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
      

        <DessertArticle
        title="Magnificent Cake"
        price="$3.89"
        subtitle="sabor a cerezas tropicales"
        img="/img/cupcake_four.png" 
        flavor1="Strawberry"
        flavor2="Blueberry"
        flavor3="Limonade"
        flavor4="Cherry"
        star1="/img/star.svg"
        star2="/img/star.svg" 
        star3="/img/star.svg"
        star4="/img/star.svg"
        star5="/img/star.svg"
        reviews="+23 reviews"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore aperiam voluptatibus aliquam praesentium another vocabulary.
          Lorem ipsum dolor sit amet consectetur adipisicing elit"/>

        <DessertArticle
        title="Summer Surprise"
        price="$3.89"
        subtitle="sabor a cerezas tropicales"
        img="/img/cupcake_five.png" 
        flavor1="Strawberry"
        flavor2="Blueberry"
        flavor3="Limonade"
        flavor4="Cherry"
        star1="/img/star.svg"
        star2="/img/star.svg" 
        star3="/img/star.svg"
        star4="/img/star.svg"
        star5="/img/star.svg"
        reviews="+23 reviews"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore aperiam voluptatibus aliquam praesentium another vocabulary.
          Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
        </section>
    </>
  )
}

export default HomePage