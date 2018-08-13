import React from "react";

export default ({ children }) => (
  <div style={{ 
      maxWidth: '100%', 
      backgroundImage: 'url(https://images.pexels.com/photos/939962/pexels-photo-939962.jpeg)', 
      backgroundSize: 'cover', 
      height: '754px', 
      paddingTop: 100,
      position: 'relative',
    }}>
    <div style={{
        bottom: 0,
        right:5,
        position: 'absolute',
    }}>{children}</div>
</div>
);