import React from 'react'
import { PageSelector, StatusSelected, UserSelected } from '..'

function DashboardPage() {
    return (
        <div>
            <PageSelector />
            <UserSelected />
            <StatusSelected />
        </div>
    )
}

export default DashboardPage
