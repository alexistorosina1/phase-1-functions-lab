// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const headquarters = 42;
    if (street > 42) {
        return street-headquarters
    }
    else {
        return headquarters-street
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    }
    else {
        return (destination - start) *264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) *.02
    }
    else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}