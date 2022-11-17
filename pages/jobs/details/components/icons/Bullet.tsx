import React from 'react';

type BulletProps = {
    styles?: string
}
function Bullet(props:BulletProps) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                <rect width="9" height="9" fill="#384564" fill-opacity="0.632594"/>
            </svg>
        </div>
    );
}

export default Bullet;