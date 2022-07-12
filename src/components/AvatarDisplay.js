import blankAvatar from '../Images/blankAvatar.png'

const AvatarDisplay = ({ticket}) => {
    return(
        <div className="avatar-container">
            <div className="img-container">
                <img src={ticket.avatar ? ticket.avatar: blankAvatar} alt={'photo of ' + ticket.onwer}/>
            </div>
            
        </div>
    );
}

export default AvatarDisplay;