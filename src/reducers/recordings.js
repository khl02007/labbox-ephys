import { ADD_RECORDING, DELETE_RECORDINGS, SET_RECORDING_INFO } from '../actions'

const recordings = (state = [], action) => {
    switch (action.type) {
        case ADD_RECORDING:
            if (state.filter(rec => rec.recordingId === action.recordingId)[0]) return;
            return [
                ...state,
                action.recording
            ];
        case DELETE_RECORDINGS:
            const exclude = Object.fromEntries(action.recordingIds.map(id => [id, true]));
            return state.filter(rec => (
                !(rec.recordingId in exclude)
            ));
        case SET_RECORDING_INFO:
            const rec = state.filter(r => (r.recordingId === action.recordingId))[0];
            if (!rec) {
                // console.warn(`Unable to find recording: ${action.recordingId}`);
                return state;
            }
            return [
                ...state.filter(r => (r.recordingId !== action.recordingId)),
                {
                    ...rec,
                    recordingInfo: action.recordingInfo
                }
            ];
        default:
            return state
    }
}

export default recordings