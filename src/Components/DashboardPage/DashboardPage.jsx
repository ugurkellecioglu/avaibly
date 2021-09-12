import React, { useState } from 'react'
import { PageSelector, StatusSelected, UserSelected } from '..'

function DashboardPage() {
    const [mode, setMode] = useState("user")
    const handlePage = (value) => setMode(value)
    return (
        <div>
            <PageSelector handlePageProp={handlePage}/>
            {
                mode === 'user' ? <UserSelected /> : mode === "status" ? <StatusSelected /> : null
            }
        </div>
    )
}

export default DashboardPage
