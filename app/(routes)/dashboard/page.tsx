import React from 'react'
import WelcomeBanner from './components/WelcomeBanner'
import EnrolledCourses from './components/EnrolledCourses'
import ExploreMore from './components/ExploreMore'
import InviteFriend from './components/InviteFriend'
import UserStatus from './components/UserStatus'
import UpgradeToPro from './components/UpgradeToPro'

function Dashboard() {
  return (
    <div className="p-10 md:px-20 lg:px-32 xl:px-48">
        <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
                <WelcomeBanner />
                <EnrolledCourses />
                <ExploreMore />
                <InviteFriend />
                
            </div>
            <div>
                <UserStatus />
                <UpgradeToPro />
            </div>
        </div>
    </div>
  )
}

export default Dashboard