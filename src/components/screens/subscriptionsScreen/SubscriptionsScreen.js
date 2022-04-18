import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribedChannel } from '../../../redux/actions/videos.action';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';

const SubscriptionsScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribedChannel());
  }, [dispatch]);

  const { loading, videos } = useSelector(state => state.subscriptionsChannel);
  return (
    <Container fluid>
      {!loading ? videos?.map(video => <VideoHorizontal video={video} key={video.id} subscriptionScreen />) :
        <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147" >
          <Skeleton
            width="100%"
            height="160px"
            count={20} />
        </SkeletonTheme>}
    </Container>
  )
}

export default SubscriptionsScreen