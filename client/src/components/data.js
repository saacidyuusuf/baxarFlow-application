import { codingImg } from "../assets/index";

const article = [
  {
    id: 1,
    category: "Programming",
    name: "Attendence",
    img: codingImg,
    content: [
      {
        type: "text",
        text: "Article 1 description",
      },
      {
        type: "code",
        code: `import React from "react";
        import { useContext } from "react";
        import { InputContext } from "../context/context";
        import Data from "./data";
        import ArticleCard from './articleCard'
        
        const EachCategory = () => {
          const { clickedCategory } = useContext(InputContext);
        
          let filterSameCategory = Data.filter((data) => {
            if (clickedCategory.includes(data.category)) {
              console.log(data)
              return data
            };
          });
        
          /*   const filterCategoryByChoosed = article.filter((article) => {
            if (selectedCategory.includes(article.category)) {
              return article;
            }
          }); */
        
          return (
            <div className="eachCategory">
              <h1>{clickedCategory}</h1>
              {filterSameCategory.map((articleItem) => {
                <ArticleCard
                key={articleItem.id}
                name={articleItem.name}
                img={articleItem.img}
                category={articleItem.category}
                id={articleItem.id}
                text={articleItem.text}
                content={articleItem.content}
                article={articleItem}
              />
              })}
            </div>
          );
        };
        
        export default EachCategory;
        "
}`,
      },
    ],
  },
  {
    id: 2,
    category: "Programming",
    name: "Connect to mysql",
    img:  codingImg ,
    content: [
      {
        type: "text",
        text: "Article 2 description",
      },
      {
        type: "code",
        code: `function() {
            return "connect to mysql"
        }`,
      },
    ],
  },

  {
    id: 3,
    category: "Programming",
    name: "Passport auth with react",
    img: codingImg ,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
  {
    id: 4,
    category: "Programming",
    name: "Hooks",
    img: codingImg ,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
  {
    id: 5,
    category: "Software engineering",
    name: "Sidee lagu noqda Software engineering",
    img:  codingImg ,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
  {
    id: 6,
    category: "Reading",
    name: "Baro sida wax loo Akhriyo",
    img: codingImg ,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
  {
    id: 7,
    category: "Video editing",
    name: "Baro sida loo sameeyo Video editing",
    img: codingImg ,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
  {
    id: 8,
    category: "Science",
    name: "Wax ka baro Science",
    img: codingImg ,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
];

export default article;
