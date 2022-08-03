/*
import React from 'react';
import ReactDOM from "react-dom/client";
*/


// export const helloWorld = <h1>Hello World!</h1>;
//
// export const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(helloWorld);


/*
const Text = props => {
    return <h1>{props.text}</h1>;
}

const Img = props => {
    return <img src={props.src}/>
}

function HelloImg() {
    return (
        <div>
            <Text text='Hello'/>
            <Img src='https://static.tildacdn.com/tild3165-3964-4936-b837-346665326130/unnamed.jpg'/>
            <p>
                <Text text='Bay'/>
            </p>
        </div>
    )
}

export default HelloImg;*/
/*

export const names = ['Lisa', 'Anna', 'Mery'];

const ListItem = props => {
    return <li>{props.value}</li>

}

function ListOfName(props) {
    const names = props.names;
    const listItems = names.map((name) =>
    <ListItem key={name} value={names}/>);

        return (
            <ul>
                {listItems}
            </ul>
        );
}

export default ListOfName;


*/



import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default Basic;