import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'AvenirNextLTPro-Regular';
    src: url('../fonts/AvenirNextLTPro-Regular.otf') format('truetype');
  }
@font-face {
    font-family: 'HelveticaNeue-Light-08';
    src: url('../fonts/HelveticaNeue-Light-08.ttf') format('truetype');
  }
  @font-face {
      font-family: 'HelveticaNeue-Thin-13';
      src: url('../fonts/HelveticaNeue-Thin-13.ttf') format('truetype');
    }
    @font-face {
        font-family: 'HelveticaNeue-Bold-02';
        src: url('../fonts/HelveticaNeue-Bold-02.ttf') format('truetype');
      }

  :root{
    --avenir-regular:'AvenirNextLTPro-Regular';
    --helvetica-normal:'HelveticaNeue-Light-08';
    --helvetica-thin:'HelveticaNeue-Thin-13';
    --helvetica-bold:'HelveticaNeue-Bold-02';
  }

*{
    box-sizing:border-box;
    margin:0px;
    padding:0px;
}
html{
    scroll-behavior:smooth;
}
h1, h2, h3, h4, h5, h6, p, ul{
    margin:0px;
    padding:0px;
}
img{
    display:block;
}
li{
    list-style:none;
}
p{
    padding-bottom:30px;
}
p:last-child{
    padding-bottom:0px;
}
body{
    background-color:${({ theme }) => theme.colors.cyan};
    margin:0px;
    padding:0px;
    font-family: var(--avenir-regular);
    color:${({ theme }) => theme.colors.white};
    letter-spacing:1px;
    font-size:18px;
}
.d-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}

.relative{
  position:relative;
}

.row{
    width:100%;
    max-width:1200px;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:flex-start;
    padding:0 20px;
}
.col{
    width:100%;
}
@media (min-width:${({ theme }) => theme.media.mobile}) {

    .col-1 {
      max-width: 8.333333%;
    }
  
    .col-2 {
      max-width: 16.666667%;
    }
  
    .col-3 {
      max-width: 25%;
    }
  
    .col-4 {
      max-width: 33.333333%;
    }
  
    .col-5 {
      max-width: 41.666667%;
    }
  
    .col-6 {
      max-width: 50%;
    }
  
    .col-7 {
      max-width: 58.333333%;
    }
  
    .col-8 {
      max-width: 66.666667%;
    }
  
    .col-9 {
      max-width: 75%;
    }
  
    .col-10 {
      max-width: 83.333333%;
    }
  
    .col-11 {
      max-width: 91.666667%;
    }
  
    .col-12 {
      max-width: 100%;
    }
  }

  @media
  `;

export default GlobalStyle;
