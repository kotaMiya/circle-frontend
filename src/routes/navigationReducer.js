import { router } from './AppNavigator';

export default function navigationReducer(state, action) {
    const nextState = router.getStateForAction(action, state);
    return nextState || state;
}