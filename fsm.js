class FSM {
    constructor({ initial, states, edges }) {
        this.state = initial;
        this.states = states;
        this.edges = edges;
    }

    getState() {
        return this.state;
    }

    _getNextGiven(action) {
        const transitions = this.edges[this.state];

        if (!transitions) {
            return transitions;
        }
        if (typeof transitions === 'string') {
            return transitions;
        } else {
            return transitions[action];
        }
    }

    canProcess(action) {
        return !!this._getNextGiven(action);
    }

    process(action) {
        this.state = this._getNextGiven(action);
    }
}

module.exports = FSM;