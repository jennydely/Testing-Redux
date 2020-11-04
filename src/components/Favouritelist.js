import React from "react";
import { togglePacklist } from '../redux/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

function Favouritelist({packlists, togglePacklist}) {
console.log(packlists)
    return (
        <>
            <h2>Your favourite Packlists:</h2>
            <StyledUl>

                {packlists.map(packlist => {
                    return packlist.chosen ? (<li key={packlist.id} className={'packlist_chosen'}>{packlist.name} <button onClick={() => togglePacklist(packlist.id)}>Delete</button></li>)
                        : null
                })}
            </StyledUl>
        </>
    )
}

const mapStateToProps = state => {
    const { error, pending, packlists } = state.packlists || {};
    return { packlists, error, pending };
};
const mapDispatchToProps = {
    togglePacklist
}

export default connect(mapStateToProps, mapDispatchToProps)(Favouritelist)

const StyledUl= styled.ul`
align: right
`