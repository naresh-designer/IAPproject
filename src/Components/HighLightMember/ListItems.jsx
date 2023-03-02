import React from 'react'
import styled from 'styled-components'

const ListItems = ({topBg,bottomBg,items}) => {
  return (
    <ListItemsSec>
        <div className="secnd-mem-list">
        <div className={`blue-color ${topBg}-color`}>
            <div className="col col-12"><img src={items[0].topImage} alt=""/></div>
            <div className="big-head">{items[0].topNumber}
                <p>{items[0].topContent}</p>
            </div>
            
        </div>
        <div className={`blue-color ${bottomBg}-color`}>
            <div className="col col-12"><img src={items[0].bottomImage} alt=""/></div>
            <div className="big-head">{items[0].bottomNumber}
                <p>{items[0].bottomContent}</p>
            </div>
            
        </div>
    </div> 
    </ListItemsSec>
  )
}

const ListItemsSec = styled.section`
.secnd-mem-list{
    width:275px;
    /* position: relative; */
}
img {
  margin: auto;
}

.blue-color{
    background-color: ${({ theme }) => theme.colors.darkblue};
    border-radius: 200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 237px;
    padding-bottom: 75px;
    z-index: -9;
}

.big-head{
    font-size: 60px;
    line-height: 66px;
    padding-top: 20px;
    font-family: var(--helvetica-bold);
}

.blue-color p, .green-color p, .orange-color p, .brown-color p{
    font-size: 22px;
    line-height: 22px;
    padding: 10px 30px 0 30px;
    font-family: var(--helvetica-normal);
}

.lightBlue-color{
    background-color: ${({ theme }) => theme.colors.lighterBlue};
    position: relative;
    width: 100%;
    margin-top: -300px;
    padding-top: 350px;
}

.green-color{
    background-color: ${({ theme }) => theme.colors.green};
    padding-top: 365px;
}

.lightGreen-color{
    background-color: ${({ theme }) => theme.colors.lightGreen};
    position: relative;
    width: 100%;
    margin-top: -300px;
    padding-top: 350px;
}

.orange-color{
    background-color: ${({ theme }) => theme.colors.orange};
    padding-top: 487px;
}

.lightOrange-color{
    background-color: ${({ theme }) => theme.colors.lightOrange};
    position: relative;
    width: 100%;
    margin-top: -300px;
    padding-top: 350px;
}

.brown-color{
    background-color: ${({ theme }) => theme.colors.brown};
    padding-top: 565px;
}

.lightBrown-color{
    background-color: ${({ theme }) => theme.colors.lightBrown};
    position: relative;
    width: 100%;
    margin-top: -300px;
    padding-top: 350px;
}
@media(max-width:${({theme})=>theme.media.mobile}){
    .secnd-mem-list{
        margin-bottom:30px;
    }
}
`;

export default ListItems