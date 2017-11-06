import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardHeader } from '../../common'
import { fetchPaymentsNotes, completePaymentNote } from '../actions/operations'
class CompletePaymentNotes extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchPaymentsNotes(companyId, localStorage.getItem('token'))
    }
    render(){
        const { companyId, paymentNoteId } = this.props.match.params
        const { paymentNote } = this.props
        if(!paymentNote){
            return <div>loading...d</div>
        }
        return(
            <section className='content'>
                <div className='container-fluid'>
                    <Card>
                        <CardHeader title='Complete Payment Note' category=''/>
                        <CardBody>
                            <p>
                                <strong>Tenant: </strong> {paymentNote.tenant} <br/>
                                <strong>Initial Mount: </strong> ${paymentNote.mount} <br/>
                                <strong>Days: </strong> {paymentNote.days} <br/>
                                <strong>Description: </strong> {paymentNote.description} <br/>
                                <strong>To pay: </strong> ${paymentNote.rest} <br/>
                                <strong>valid: </strong> {paymentNote.valid ? 'In course' : 'Complete'} <br/>
                            </p>
                            {paymentNote.valid &&
                                <button 
                                    className='btn btn-primary' 
                                    onClick={() => completePaymentNote(companyId, paymentNoteId)} 
                                >
                                    Complete
                                </button>}
                        </CardBody>
                    </Card> 
                </div>
            </section>
        )
    }
}
const mapStateToProps = ({ paymentNotes }, { match }) => {
    return {
        paymentNote: paymentNotes[match.params.paymentNoteId]
    }
}
export default withRouter(connect(mapStateToProps, { fetchPaymentsNotes })(CompletePaymentNotes))