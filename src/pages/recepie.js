import Header from "../components/receipes/header";
import styled from "styled-components";
import { Fragment, useEffect, useMemo, useState } from "react";
import { getRestuarant } from "../actions/restuarants";
import { connect } from "react-redux";
import { useParams } from "react-router";
import restuarant from "../reducers/restuarant";
import { media } from "../constants/breakpoint";
import { Link } from "react-router-dom";
import Loading from "../components/UI/loading";

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
const ContentConatiner = styled.div`
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: 60% 30%;
    grid-auto-flow: column;
    grid-gap: 4rem;
    margin: 0rem;
    ${media.mobileOnly} {
        grid-template-columns: 100%;
        grid-auto-flow: row;
        padding: 0 1rem;
        margin: 0;
    }
`;

const MenuContainer = styled.ul`
    width: 100%;
    display: flex;
    margin: 2rem 0;
    border-right: ${props => props.showBorder ? '2px solid #B9E4C9' : 'none'};
    list-style: none;
    flex-direction: column;
    ${media.mobileOnly} {
        border: none;
        padding-left: 0;
        margin: auto;
    }
`

const MenuItem = styled.li`
    margin-bottom: 1rem;
    cursor: pointer;
    &.active a{
        color: #FD5523;
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
`

const CategoryTitle = styled(DishTitle)`
    font-weight: 700;
    &.active {
        color: #FD5523;
    }
`

const DishContainer = styled.div`
    padding-bottom: 1rem;
    width: 80%;
    ${media.mobileOnly} {
        margin: auto;
    }
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

const AddressContainer = styled(MenuContainer)`
    position: relative;
    padding: 0;
`
const Address = styled.div`
    width: 20rem; 
    height: auto;
    box-shadow: rgb(28 28 28 / 12%) 0px 2px 8px;
    padding: 1rem;
    position: relative;
    right: 1rem;
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
`

const FixedContainer = styled.div`
        position: fixed;
        bottom: 20px;
        right 7rem;
        width: 80px;
        height: 80px;
        color: #356589;
        background: #B9E4C9;
        text-align: center;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 80px;
        cursor: pointer;
        p {
            padding-left: 0.5rem;
            margin: 0;
        }
        ${media.mobileOnly} {
            right: 1rem;
        }
`

const CategoryContainer = styled.div`
        position: fixed;
        bottom: 7rem;
        right: 3rem;
        list-style: none;
        display: flex;
        background: #B9E4C9;
        transition: 1s;
        flex-direction: column;
        overflow-y: auto;
        box-shadow: rgb(28 28 28 / 12%) 0px 2px 8px;
        padding: 1rem;
        height: 20rem;
        ${media.mobileOnly} {
            height: 20rem;
            width: 10rem;
        }
`;

const DishList = styled.li`
`

const NextContainer = styled.div`
    position: fixed;
    top: 50%;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #B9E4C9;
    color: #356589;
    cursor: pointer;
    ${media.mobileOnly} {
        right: 0.5rem;
    }   
`

const PrevContainer = styled(NextContainer)`
     left: 1rem;   
     ${media.mobileOnly} {
         left: 0.5rem;
     }
`

const NoDataContainer = styled.h2`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
`

const NoData = (props) => {
    return <NoDataContainer>Data not found for the given ID</NoDataContainer>
}

const Restuarant = (props) => {
    const [activeMenu, setActiveMenu] = useState(menuTitles[0]);
    const { id } = useParams();
    const { restuarant = {} } = props;
    const [showCategory, setShowCategory] = useState(false);

    useEffect(() => {
        props.dispatch(getRestuarant(id, props.restuarants))
    }, [id]);

    const { dishes, categories } = useMemo(() => {
        const categories = [], dishes = [];
        if (restuarant.categories)
            for (let index = 0; index < restuarant.categories.length; index++) {
                const category = restuarant.categories[index], name = category.name;
                categories.push(<MenuItem className={name === activeMenu ? "active" : null} onClick={() => setActiveMenu(name)}>
                    <AnchorTag href={`#${name.replace(" ", "_")}`} width={`${name.length}ch`} onClick={() => setShowCategory(false)}>{name}</AnchorTag>
                </MenuItem>)
                for (let dishIndex = 0; dishIndex < category["menu-items"].length; dishIndex++) {
                    const menu = category["menu-items"][dishIndex];
                    dishes.push(<DishList id={name.replace(" ", "_")} >
                        {
                            dishIndex === 0 && <CategoryTitle className={activeMenu === name && 'active'}>{name}</CategoryTitle>
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
                                {menu.price && <DishPrice>{menu.price}Rs/</DishPrice>}
                            </DishItem>
                        </DishContainer>
                    </DishList>)
                }
            }
        return {
            dishes, categories
        }
    }, [activeMenu, props.restuarant]);

    return props.loading ? <Loading /> : <Container>
        <Header restuarant={restuarant.name} />
        {props.error ? <NoData /> : <Fragment>
            <ContentConatiner>
                <MenuContainer showBorder={true}>
                    {dishes}
                </MenuContainer>
                <AddressContainer>
                    <Address>
                        <AddressHeader>Call</AddressHeader>
                        <AddressContent>1234567890</AddressContent>
                        <AddressHeader>Address</AddressHeader>
                        <AddressContent>{restuarant.address}</AddressContent>
                    </Address>
                </AddressContainer>
            </ContentConatiner>
            <FixedContainer onClick={() => setShowCategory(!showCategory)}>
                <i class="fas fa-utensils"></i>
                <p>Menu</p>
            </FixedContainer>
        </Fragment>}
        {showCategory && <CategoryContainer>
            {categories}
        </CategoryContainer>}
        {!props.error && <Link to={`/${Number(id) + 1}`}>
            <NextContainer>
                <i class="fas fa-chevron-right"></i>
            </NextContainer>
        </Link>}
        {id > 0 && <Link to={`/${Number(id) - 1}`}>
            <PrevContainer>
                <i class="fas fa-chevron-left"></i>
            </PrevContainer>
        </Link>}
    </Container>
}



function mapStateToProps(store) {
    return {
        restuarant: store.restuarant.data,
        loading: store.restuarant.loading,
        error: store.restuarant.error,
        restuarants: store.restuarants.data
    }
}

export default connect(mapStateToProps)(Restuarant);