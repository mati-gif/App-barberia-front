import React from 'react'

function MyShifts() {

    
    return (
        <>
            <div className='border-4 border-red-500  min-h-[100vh] '>
                <h1 className="text-3xl font-bold text-center mb-8">Welcome, {name}!</h1>
                <div className="flex justify-center flex-wrap gap-10">
                    {/* {accounts && accounts.length > 0 ? (
                        accounts.map((account) => (
                            <Link key={account.id} to={`/accounts/${account.id}`}>

                            </Link>
                        ))
                    ) : (
                        <p className="text-lg font-bold text-center text-red-600">No accounts found.</p>
                    )} */}
                </div>
            </div>
        </>
    )
}

export default MyShifts