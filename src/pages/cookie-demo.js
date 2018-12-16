import React from "react";

export default () => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }} >
        <h1 >Italian Homemade cooking</h1>
        <img style={{
            width: 160,
            height: 160
        }}   
        src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/male-cook_1f468-200d-1f373.png' alt="chefImg" />
        <p>Hello, I am Chef Giuseppe - what would you like to order today?</p>
        <div>
            <img src='https://shop.coles.com.au/wcsstore/Coles-CAS/images/9/1/9/9196207.jpg'/>
            <img style={{
                width: 300
            }}
                src='https://external-preview.redd.it/hVpQOBjDWAdybIphv4JhmFAFgTYIdkhxnc9-ggbGuyE.jpg?auto=webp&s=2db757120df9b1a721957d06a7e08e9d1ff973d3'/>
        </div>
        <div id="foodCont">
            Your food will be ready soon
        </div>
    </div>
  );