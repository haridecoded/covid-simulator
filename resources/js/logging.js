class Logger {
    constructor(firebase, firestore, userId) {
        this.firebase = firebase;
        this.firestore = firestore;
        this.userId = userId;
        this.doc = this.firestore.collection('testCollection').doc(userId);
        this.doc.set({ 'userId': userId });
    }

    record(obj) {
        this.doc.set(obj, { merge: true });
    }

    recordTime(screenName, simulation, start) {
        var rootKey = simulation ? 'simulationTimes' : 'screenTimes'
        var startEnd = start ? 'start' : 'end'
        this.record({
            [rootKey]: {
                [screenName]: {
                    [startEnd]: new Date()
                }
            }
        });
    }

    begin(screenName, simulation) {
        this.recordTime(screenName, simulation, true);
    }

    end(screenName, simulation) {
        this.recordTime(screenName, simulation, false);
    }

    recordSimulation(obj) {
        this.record({
            userSimulations: this.firebase.firestore.FieldValue.arrayUnion(obj)
        });
    }
}