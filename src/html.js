import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}




module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <div
          key={`dataLayer`}
          id="___dataLayer"
          dangerouslySetInnerHTML=
            {{ __html: `
              <script>
              window.dataLayer = {};
              dataLayer.food = {
                italian: [
                  'pizza',
                  'pasta',
                  'gelato'
                ],
                japanese: [
                  'sushi',
                  'ramen',
                  'mochi'
                ],
                chinese: [
                  'dumplings',
                  'fried rice',
                  'noodles'
                ]
              };
              </script>
            `, }}
        />
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <div
        key={`cookies`}
        id="___cookies"
        dangerouslySetInnerHTML=
          {{ __html: `
            <script>
            var foodPref = localStorage.getItem('myOrder');
            console.log(foodPref)
            var foodCont = document.querySelector('#foodCont')
            foodCont.innerHTML = foodPref
            </script>
          `, }}
      />
      </html>
    )
  }
}


