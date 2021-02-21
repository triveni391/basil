import Header from "../components/receipes/header";
import styled from "styled-components";
import { Fragment, useEffect, useMemo, useState } from "react";
import { getRestuarant } from "../actions/restuarants";
import { connect } from "react-redux";
import { useParams } from "react-router";
import restuarant from "../reducers/restuarant";
import { media } from "../constants/breakpoint";

const menuTitles = ["recommended", "starters", "main course", "combo", "desserts"];
const dishes = {
    recommended: [{
        name: "chicken biryani",
        price: 100,
        bestseller: true,
        isVeg: false
    },
    {
        name: "mutton biryani",
        price: 150,
        bestseller: false,
        isVeg: false
    },
    {
        name: "paneer makhani dum biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    },
    {
        name: "Mushroom biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    }],
    starters: [{
        name: "chicken biryani",
        price: 100,
        bestseller: true,
        isVeg: false
    },
    {
        name: "mutton biryani",
        price: 150,
        bestseller: false,
        isVeg: false
    },
    {
        name: "paneer makhani dum biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    },
    {
        name: "Mushroom biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    }],
    "main course": [{
        name: "chicken biryani",
        price: 100,
        bestseller: true,
        isVeg: false
    },
    {
        name: "mutton biryani",
        price: 150,
        bestseller: false,
        isVeg: false
    },
    {
        name: "paneer makhani dum biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    },
    {
        name: "Mushroom biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    }],
    combo: [{
        name: "chicken biryani",
        price: 100,
        bestseller: true,
        isVeg: false
    },
    {
        name: "mutton biryani",
        price: 150,
        bestseller: false,
        isVeg: false
    },
    {
        name: "paneer makhani dum biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    },
    {
        name: "Mushroom biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    }],
    desserts: [{
        name: "chicken biryani",
        price: 100,
        bestseller: true,
        isVeg: false
    },
    {
        name: "mutton biryani",
        price: 150,
        bestseller: false,
        isVeg: false
    },
    {
        name: "paneer makhani dum biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    },
    {
        name: "Mushroom biryani",
        price: 90,
        bestseller: true,
        isVeg: true
    }],
}
// const dishes = [{
//     title
// }];
const ImageContainer = styled.img`
    width: 100%;
    height: 25rem;
    padding-top: 1rem;
`

const ContentConatiner = styled.div`
    padding: 1rem 4rem;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-auto-flow: column;
    grid-gap: 5rem;
`;

const MenuContainer = styled.ul`
    width: 100%;
    display: flex;
    margin: 2rem 0;
    border-right: 2px solid #B9E4C9;
    list-style: none;
    flex-direction: column;
    
`

const MenuItem = styled.li`
    margin: 1rem 0;
    cursor: pointer;
    &.active a{
        border-bottom: 2px solid #356859;
    }
`

const AnchorTag = styled.a`
    width: ${props => props.width};
    color: #356859;
    text-transform: uppercase;
    text-decoration: none;
`

const Title = styled.h1`
    font-size: 6em;
    text-align: center;
    color: #FD5523;
    border-bottom: 1px solid #37966F;
    margin: auto;
    min-width: 30%;
    max-width: 50%;
    ${media.mobileOnly} {
            font-size: 2em;
    }
    `

const DishTitle = styled.h3`
    font-size: 1em;
    color: #37966F;
    font-weight: 400;
    text-transform: uppercase;
    ${media.mobileOnly} {

    }
`

const CategoryTitle = styled(DishTitle)`
    font-weight: 700;

`

const DishContainer = styled.div`
    padding-bottom: 1rem;
    width: 80%;
`;

const DishItem = styled.div`
    display: flex;
    border-bottom: 2px solid #B9E4C9;
    justify-content: space-between;
    padding: 1rem 0;
`;

const Specification = styled.div`
    display: flex;
`;

const DishContent = styled.div`  
    text-transform: capitalize;
    color: #37966F;
    font-size: 600;
`

const DishPrice = styled.p`
    color: #37966F;
`

const Button = styled.button`
    padding: 0.5rem;
    width: 10%;
    height: 2rem;
    background: inherit;
    align-self: center;
    border: 2px solid #37966F;
    color: #37966F;
    cursor: pointer;
`
const DishType = styled.div`
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding: 7px;
    justify-content: center;
    border: 2px solid ${props => props.color};
    color: ${props => props.color};
`;

const AddressContainer = styled.div`
    width: 20rem; 
    height: auto;
    box-shadow: rgb(28 28 28 / 12%) 0px 2px 8px;
    padding: 1rem;
`

const AddressHeader = styled.h5`
    font-size: 1.5em;
    color: #37966F;
    font-weight: bold;
    margin: 1rem 0;
`

const AddressContent = styled.p`
    font-size: 1em;
    color: #37966F;
    margin: 1rem 0;
`

const Container = styled.div`
      overflow-y: hidden;
`
const Restuarant = (props) => {
    const [activeMenu, setActiveMenu] = useState(menuTitles[0]);
    const { id } = useParams();
    const { restuarant = {} } = props;

    useEffect(() => {
        props.dispatch(getRestuarant(id, props.restuarants))
    }, []);

    const { dishes, categories } = useMemo(() => {
        const categories = [], dishes = [];
        if (restuarant.categories)
            for (let index = 0; index < restuarant.categories.length; index++) {
                const category = restuarant.categories[index], name = category.name;
                if (name === activeMenu)
                    categories.push(<MenuItem className={name === activeMenu ? "active" : null} onClick={() => setActiveMenu(name)}>
                        <AnchorTag href={`#${name.replace(" ", "_")}`} width={`${name.length}ch`}>{name}</AnchorTag>
                    </MenuItem>)
                for (let dishIndex = 0; dishIndex < category["menu-items"].length; dishIndex++) {
                    const menu = category["menu-items"][dishIndex];
                    dishes.push(<Fragment>
                        {
                            dishIndex === 0 && <CategoryTitle id={name.replace(" ", "_")}>{name}</CategoryTitle>
                        }
                        <DishContainer>
                            <DishItem>
                                <DishContent>
                                    <Specification>
                                        <DishType color={menu.isVeg ? "#37966F" : "#ad4728"}>O</DishType>
                                        <span>{menu.bestseller && "BestSeller"}</span>
                                    </Specification>
                                    <DishTitle>{menu.name}</DishTitle>
                                </DishContent>
                                <DishPrice>{menu.price}Rs/</DishPrice>
                            </DishItem>
                        </DishContainer>
                    </Fragment>)
                }
            }
        return {
            dishes, categories
        }
    }, [props.restuarant]);
    console.log(props.restuarant);

    return <Container>
        <Header />
        <Title>{restuarant.name}</Title>
        <ContentConatiner>
            <MenuContainer>
                {categories}
            </MenuContainer>
            <MenuContainer>
                {dishes}
            </MenuContainer>
            <MenuContainer>
                <AddressContainer>
                    <AddressHeader>Call</AddressHeader>
                    <AddressContent>1234567890</AddressContent>
                    <AddressHeader>Address</AddressHeader>
                    <AddressContent>{restuarant.address}</AddressContent>
                </AddressContainer>
            </MenuContainer>
        </ContentConatiner>
    </Container>
}

function mapStateToProps(store) {
    return {
        restuarant: store.restuarant.data,
        restuarants: store.restuarants.data
    }
}

export default connect(mapStateToProps)(Restuarant);