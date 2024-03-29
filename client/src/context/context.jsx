import { createContext, useState, useReducer } from "react";
import Reducer from "./Reducer";

const intialArticles = {
  articles: [],
  articlesLength: 0,
};

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [article, SetArticle] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [state, dispatch] = useReducer(Reducer, intialArticles);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [clickedCategory, setClickedCategory] = useState("");
  const [generatedTexts, setGeneratedTexts] = useState([]);


  const addInput = (text) => {
    setInputs((prevInputs) => [...prevInputs, text]);
  };

  const addCategory = (category) => {
    if (!selectedCategory.includes(category)) {
      setSelectedCategory((prevCategory) => [...prevCategory, category]);
    }
  };
  //adding category to selectedCategory
  //state so that u use selectedcategory
  // in userchoosed component

  const removeCategory = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory.filter((selectedCat) => selectedCat !== category)
    );
  };
  //removing category from selectedCategory
  //state if we deselect in choose component

  const AddclickCategory = (category) => {
   // setClickedCategory((prevCategory) => [...prevCategory, category]);
    setClickedCategory([category]);
  };
  //func kore wa homesidebar tabs of category


  const addArticle = (articles) => {
    dispatch({
      type: "add",
      payload: articles,
    });
  };

  const removeArticle = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  return (
    <InputContext.Provider
      value={{
        articles: state.articles,
        articlesLength: state.articles.length,
        inputs,
        addInput,
        selectedCategory,
        setSelectedCategory,
        addCategory,
        removeCategory,
        AddclickCategory,
        clickedCategory,
        addArticle,
        removeArticle,
        user,
        setUser,
        setGeneratedTexts,
        generatedTexts
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
