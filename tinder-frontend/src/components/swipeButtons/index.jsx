import React from 'react';
import { Replay, Close, Star, Favorite, FlashOn } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';
import './style.css'

export default function SwipeButtons() {
    return (
        <div className="swipeButtons" >
            <IconButton className="swipeButtons__repeat">
                <Replay fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <Close fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <Star fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <Favorite fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOn fontSize="large" />
            </IconButton>
        </div>
    );
}
