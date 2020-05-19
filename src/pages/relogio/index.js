import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Vibration } from 'react-native';
import moment from 'moment';

export default class App extends Component {

    state = {
        start: false,
        bombClock: {
            seconds: ''
        },

        status: 'Start'
    }

    countdownInterval = 0;

    startCountdown = () => {
        const explodeTime = moment();
        let seconds = this.state.bombClock.seconds ? this.state.bombClock.seconds : 0;
        explodeTime.add(seconds, 'seconds')
        const currentTime = moment();
        let diffTime = explodeTime.unix() - currentTime.unix();
        let duration = moment.duration(diffTime * 1000, 'milliseconds');
        const interval = 1000;

        if (diffTime > 0) {
            this.countdownInterval = setInterval(() => {
                duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
                seconds = moment.duration(duration).seconds().toString();

                const bombClock = this.state.bombClock;
                bombClock.seconds = seconds.length === 1 ? '0' + seconds : seconds;

                if (bombClock.seconds <= 0) {
                    clearInterval(this.countdownInterval);
                    console.log("ronaldobom")
                }
                this.setState({ bombClock: bombClock });
            }, 1000);
        }

        return null;
    }

    bombActivation = () => {

        if (this.state.start) {

            clearInterval(this.countdownInterval);
            this.setState({ start: false, status: 'Start' });
            console.log(this.state.bombClock.seconds);
            return true;

        } else {
            this.setState({ start: true, status: 'Stop' });
            this.startCountdown();
            return true;
        }

    }


    setBombClock = (type, value) => {
        const bombClock = this.state.bombClock;

        bombClock[type] = value;
        this.setState({ bombClock: bombClock });
    }

    render = () => {
        return (
            <View style={styles.container}>

                <View style={styles.viewClock}>

                    <Text style={styles.inputTime}>{this.state.bombClock.seconds}</Text>

                </View>

                <Button
                    onPress={() => this.bombActivation()}
                    title={this.state.status}
                    color="rgb(255, 95, 95)"
                    accessibilityLabel="Iniciar a bomba"
                />
                <Button
                    onPress={() => this.setBombClock('seconds', 60)}
                    title={this.state.status}
                    color="rgb(255, 95, 95)"
                    accessibilityLabel="Iniciar a bomba"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(95, 98, 104)',
    },

    input: {
        backgroundColor: 'rgb(0, 0, 0)',
        textDecorationLine: 'none',
        height: 50,
        width: 200,
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        color: 'rgb(73, 143, 255)',
        textAlign: 'center'
    },

    viewClock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    inputTime: {
        backgroundColor: 'rgb(0, 0, 0)',
        textDecorationLine: 'none',
        height: 100,
        width: 130,
        padding: 10,
        fontSize: 50,
        marginTop: 10,
        marginBottom: 10,
        color: 'rgb(73, 143, 255)',
        textAlign: 'center',
    },

    alertText: {
        color: 'rgb(73, 143, 255)',
        fontSize: 20
    }
});