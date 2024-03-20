import {useState} from 'react'

import ExpenseForm from './Form'
import Expense from './Expense'

const EditableExpense = ({
  id,
  title,
  date,
  onFormSubmit,
  onRemove,
  onToggleRunning
}) => {

  const[editFormOpen,setEditFormOpen] = useState(false)

  const handleFormClose = () => {
    setEditFormOpen(false)
  }

  const handleFormSubmit = (expense) => {
    onFormSubmit(expense)
    setEditFormOpen(false)
  }

  if(editFormOpen) {
    return (
       <Form 
        id={id} 
        title={title} 
        date={date} 
        onFormClose={handleFormClose}
        onFormSubmit={handleFormSubmit}
       />
    )
  }
  return (
    <Expense
      id={id}
      title={title}
      date={date}
      onEditFormOpen={() => setEditFormOpen(true)}
      onRemove={onRemove}
      onToggleRunning={onToggleRunning}
    />
  )
}

export default EditableExpense;