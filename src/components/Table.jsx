// Required libraries
import React from 'react'
import { connect } from 'react-redux'

// ------------- Component
const Table = (props) => {
    const columns = props.columns
    const rows = props.rows
    const tableName = props.tableName
   console.log(rows)
 return (
        <div className="row">

        <div className="panel panel-default">
            <div className="panel-heading"> {tableName}</div>
            <div className="panel-body">
            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                <thead>
                    <tr>
                      {columns && columns.map((column,index)=> <th key={index}>{column}</th>)}

                    </tr>
                </thead>
                <tbody>
                    {rows && rows.map((row,index) =>
                        <tr key = {index}>
                            {Object.keys(row).map((columnName,index) =>
                                <td key={index}>{row[columnName]}</td>)}
                            <td key={Object.keys(row).length}>
                            <i onClick={() => {
                                if(row.id)props.editButtonHandler(row.id)
                                else props.editButtonHandler(index)
                             }} className='fa fa-edit fa-fw'></i>
                            <i onClick={() => {
                                if(row.id)props.deleteButtonHandler(row.id)
                                else props.deleteButtonHandler(index)
                            }} className='fa fa-trash-o fa-fw'></i>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            </div>
        </div>


    </div>

    );
};

// ------------- Container
const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Table);


