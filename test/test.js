const { expect } = require('chai');
const FSM = require('./../fsm');
const linearConfig = require('./linearconfig.json').fsm;

describe('FSM', () => {
    it('linear - long', () => {
        const fsm = new FSM(linearConfig);
        const expected = [
            'alder',
            'kjonn',
            'hobby',
            'fylke',
            'kommune',
            'arbeidsledig',
            'arbeidsledig-lengde',
            'lyst',
            undefined
        ];
        const actions = [
            null,
            null,
            null,
            null,
            null,
            'J',
            null,
            null,
            null
        ];

        const states = runFSM(fsm, actions);

        expect(states).to.deep.equals(expected);
    });

    it('linear - short', () => {
        const fsm = new FSM(linearConfig);
        const expected = [
            'alder',
            'kjonn',
            'hobby',
            'fylke',
            'kommune',
            'arbeidsledig',
            undefined
        ];
        const actions = [
            null,
            null,
            null,
            null,
            null,
            'N',
            null
        ];

        const states = runFSM(fsm, actions);

        expect(states).to.deep.equals(expected);
    });
});

function runFSM(fsm, actions) {
    return actions.map((action) => {
        const state = fsm.getState();
        fsm.process(action);
        return state;
    })
}