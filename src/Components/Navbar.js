import React from 'react';

const Navbar = (props) => {
    return (

        <div style = { styles.nav}>
            <div style={styles.logo}> &#60; LogoDeck &#47;&#62; </div>
            <div style = {styles.cartIconContainer}>
                <img style = {styles.cartIcon} src="https://image.flaticon.com/icons/png/512/833/833339.png" alt="Cart-Icon"/>
    <span style = {styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight:20 
    },
    logo:{
        justifyContent:'flex-start',
        color: 'red',
        fontSize:40,
        fontWeight: 'bold',
        paddingLeft:10,
    },
    nav: {
        paddingLeft:10,
        height:80,
        background: '#393e46',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartIconContainer:{
        positive: 'relative'
    },
    cartCount: {
        background:'black',
        borderRadius:'50%',
        padding: '4px 10px',
        position: 'absolute',
        right: 0,
        top: 0,
        color: 'red'
    }
}

export default Navbar;