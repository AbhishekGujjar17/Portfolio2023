import { Helmet } from "react-helmet";

const Seo = ({ description, author, keywords }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta
        name={keywords}
        content="Abhishek Gujjar, Abhishek, Abhishek Portfolio, Abhishek Gujjar Portfolio,JavaScript, React, AWS, MERN, typescript, Abhishek Gujjar Mun, Abhishek Gujjar MUN, Abhishek MUN "
      />
    </Helmet>
  );
};

Seo.defaultProps = {
  description: "Abhishek Gujjar Portfolio",
  author: "Abhishek Gujjar",
  keywords:
    "Abhishek Gujjar, Abhishek, Abhishek Portfolio, Abhishek Gujjar Portfolio,Abhishek Gujjar Mun, Abhishek Gujjar MUN, Abhishek MUN, Abhishek Linkedin, Abhishek Gujjar Linkedin, Abhishek Github, Abhishek Gujjar Github, Abhishek Twitter, Abhishek Gujjar Portfolio, Abhishek Gujjar Netlify, Abhishek Netlify, JavaScript, React, AWS, MERN,typescript",
};

export default Seo;
