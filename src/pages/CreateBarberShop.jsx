import React from 'react'

function CreateBarberShop() {
    return (
        <div className='border-4 border-blue-500  min-h-[100vh] '>
            <div className='border-2 border-[#e78] h-[100px] flex justify-end items-start'>
                <button className='p-2 bg-[#48e] rounded-lg mt-[5px] border-2 border-[#48e] text-white hover:bg-[#49e]'>
                    BarberShops Created
                </button>
            </div>
            <h2 className="text-3xl font-bold text-center mb-8">Complete the form to create a new BarberShop</h2>


            <div class="flex justify-center items-center min-h-screen">
                <div
                    class="max-w-sm w-full rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700"
                >
                    <div class="space-y-2 text-center">
                        <h1 class="text-3xl font-bold">Complete with the form</h1>

                    </div>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="premiseName"
                            >BarberShop Name </label
                            >
                            <input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="premiseName"
                                required=""
                                placeholder='Type a name for BarberShop'
                            />
                        </div>

                        <div class="space-y-2">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="Address"
                            >Address </label
                            >
                            <input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="Address"
                                required=""
                                placeholder='Type an address for BarberShop'
                            />
                        </div>

                        <div class="space-y-2">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="city"
                            >City </label
                            >
                            <input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="city"
                                required=""
                                placeholder='Type a city for BarberShop'
                            />
                        </div>

                        <button
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#4285F4] text-white"
                        >
                            <div class="flex items-center justify-center">
                                Create a BarberShop
                            </div>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateBarberShop