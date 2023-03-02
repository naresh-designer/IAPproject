import React from 'react'
import styled from 'styled-components'

const BannerTagLine = () => {
  return (
    <TagLine>
    <div class="banner-tag"><span>
        <strong> We believe...</strong> <br />
        that engagement, when done well, improves social, environmental and
        economic outcomes.</span>
  </div>
    </TagLine>
  )
}

const TagLine = styled.section`
.banner-tag {
    width: 407px;
    font-size: 40px;
    position: absolute;
    bottom: 0;
    left:0;
    line-height: 46px;
    font-family: var(--helvetica-thin);
    strong {
      font-family: var(--helvetica-bold);
    }
  }
  @media(max-width:${({theme})=>theme.media.mobile}){
    .banner-tag{
      width:auto;
      span{
        background-color:${({theme})=>theme.colors.green};
        opacity:.8;
      }
    }
  }
`;

export default BannerTagLine