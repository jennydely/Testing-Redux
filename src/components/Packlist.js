import React, { useEffect } from "react";
import './packlist.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import fetchPacklistAction from '../redux/fetchPacklists';
import { togglePacklist } from '../redux/actions'

function Packlist({ packlists, fetchPacklists, togglePacklist }) {

    useEffect(() => {
        fetchPacklists()
    },[fetchPacklists])
    
return (
    <>
   <h2>Chose a packlist:</h2> 
   <ul>
       
    {packlists ? packlists.map(packlist => {
      return  <li key={packlist.id} className={ packlist.chosen ? 'packlist_chosen': ''}>{packlist.name} <button onClick={()=>togglePacklist(packlist.id)}>Chose</button></li>
    }) : null}
    </ul>
    </>
)}

const mapStateToProps = state => {
    const {error, pending, packlists } = state.packlists || {};
    return {  packlists, error, pending};
};
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPacklists: fetchPacklistAction,
    togglePacklist
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Packlist)