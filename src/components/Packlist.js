import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import fetchPacklistAction from '../redux/fetchPacklists';
import { togglePacklist } from '../redux/actions'

function Packlist({ packlists, fetchPacklists }) {

    useEffect(() => {
        fetchPacklists()
    }, [])

return (
    <>
   <h2>Chose a packlist:</h2> 
   <ul>
    {packlists ? packlists.map(packlist => {
      return  <li key={packlist.id}>{packlist.name} <button onClick={togglePacklist}>Chose</button></li>
    }) : null}
    </ul>
    </>
)}

const mapStateToProps = state => {
    const { byIds, allIds, error, pending, packlists } = state.packlists || {};
        const AllPacklists =
        allIds
            ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
            : null;
    return { AllPacklists, packlists, error, pending};
};
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPacklists: fetchPacklistAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Packlist)