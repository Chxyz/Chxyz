/**
 * Get a min and max longitude and latitude from a center point using a given radius.
 * The result could be used to draw 4 lines (making a square area)
 * and the given coordinates would be exactly in the center of that square.
 * 
 * @param lat Latitude (float)
 * @param lon Longitude (float)
 * @param radius Distance in meters
 */
function getAreaMinMaxCoordinates(lat, lon, radius) {
    const R = 6_371_000; // earth radius in meters
    const C = 2 * Math.PI * R; // earth circumference in meters
    const LAT_DEG_PER_METER = 360 / C; // degrees per meter (for latitude)

    // Note that the latitude distance calculation is on the longitude circle circumference
    // and the longitude distance calculation is on the latitude circle circumference.
    // That's why "LON_DEG_PER_METER" is calculated using "LAT_C".
    const LAT_R = R * Math.cos(lat * (Math.PI/180)) // latitude circle radius
    const LAT_C = 2 * Math.PI * LAT_R; // latitude circle circumference
    const LON_DEG_PER_METER = 360 / LAT_C; // degrees per meter (for longitude)

    const LON_DISTANCE_IN_DEGREES = radius * LON_DEG_PER_METER;
    const LAT_DISTANCE_IN_DEGREES = radius * LAT_DEG_PER_METER;
    
    return {
        minLon: roundDegrees(lon - LON_DISTANCE_IN_DEGREES),
        maxLon: roundDegrees(lon + LON_DISTANCE_IN_DEGREES),
        minLat: roundDegrees(lat - LAT_DISTANCE_IN_DEGREES),
        maxLat: roundDegrees(lat + LAT_DISTANCE_IN_DEGREES),
    }
}

function roundDegrees(val) {
    return (Math.round(val * 100_000) / 100_000);
}
