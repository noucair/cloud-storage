import React from 'react'
import '../../styles/SideIcons.css'
import AddIcon from '@material-ui/icons/Add';

const index = () => {
    return (
        <div className='sideIcons'>
            <div className="sideIcons__top">
                <img src="https://proofmart.com/wp-content/uploads/2020/10/CALENDER-MONTH-ICON-PRODUUCT.png" alt=" Calendar" />
                <img src="https://img.icons8.com/ios/452/google-keep.png" alt=" Keep" />
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tasks-completed-621256.png" alt=" Tasks" />
            </div>

            <hr />

            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default index