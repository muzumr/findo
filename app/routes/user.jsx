

import ExpensesList from "../components/expenses/ExpensesList"
import MainHeader from "../components/navigation/MainHeader"

const dummyData =[
    {
        id:'1'
        ,title:'Rent'
        ,amount:1000
        ,date:'2020-01-01'
        },
        {
            id:'2'
            ,title:'Groceries'
            ,amount:500
            ,date:'2020-01-02'
    }
]
export default function User(){
    return <main>
        <MainHeader/>
                <ExpensesList expenses={dummyData} />
    </main>
}