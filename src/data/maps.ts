import {rad} from '../utils/utils';

type WallDef = [x: number, y: number];
type BoxDef = [x: number, y: number, angle: number, width: number, height: number];
type WheelDef = [x: number, y: number, power: number, centerX?: number, centerY?: number, size?: number];
type JumperDef = [x: number, y: number, size: number, temporary?: boolean];

export type StageDef = {
    title: string;
    walls: WallDef[][];
    boxes: BoxDef[];
    wheels: WheelDef[];
    jumpers?: JumperDef[];
    goalY: number;
    zoomY: number;
}

export const stages: StageDef[] = [
    {
        title: 'Wheel of fortune',
        goalY: 111,
        zoomY: 106.75,
        walls: [
            [
                [16.5, -300],
                [9.25, -300],
                [9.25, 8.5],
                [2, 19.25],
                [2, 26],
                [9.75, 30],
                [9.75, 33.5],
                [1.25, 41],
                [1.25, 53.75],
                [8.25, 58.75],
                [8.25, 63],
                [9.25, 64],
                [8.25, 65],
                [8.25, 99.25],
                [15.1, 106.75],
                [15.1, 111.75]
            ],

            [
                [16.5, -300],
                [16.5, 9.25],
                [9.5, 20],
                [9.5, 22.5],
                [17.5, 26],
                [17.5, 33.5],
                [24, 38.5],
                [19, 45.5],
                [19, 55.5],
                [24, 59.25],
                [24, 63],
                [23, 64],
                [24, 65],
                [24, 100.5],
                [16, 106.75],
                [16, 111.75]
            ],
            [
                [12.75, 37.5],
                [7, 43.5],
                [7, 49.75],
                [12.75, 53.75],
                [12.75, 37.5]
            ],
            [
                [14.75, 37.5],
                [14.75, 43],
                [17.5, 40.25],
                [14.75, 37.5]
            ]
        ],
        boxes: [
            // x, y, angle, width, height
            [15.5, 30.0, -45, 0.2, 0.2],
            [15.5, 32.0, -45, 0.2, 0.2],
            [15.5, 28.0, -45, 0.2, 0.2],
            [12.5, 30.0, -45, 0.2, 0.2],
            [12.5, 32.0, -45, 0.2, 0.2],
            [12.5, 28.0, -45, 0.2, 0.2],

            [9.4, 66.6, 45, 0.6, 0.1],
            [11.3, 66.6, 45, 0.6, 0.1],
            [13.2, 66.6, 45, 0.6, 0.1],
            [15.1, 66.6, 45, 0.6, 0.1],
            [17, 66.6, 45, 0.6, 0.1],
            [18.9, 66.6, 45, 0.6, 0.1],
            [20.699999999999997, 66.6, 45, 0.6, 0.1],
            [22.7, 66.6, 45, 0.6, 0.1],

            [9.4, 69.1, -45, 0.6, 0.1],
            [11.3, 69.1, -45, 0.6, 0.1],
            [13.2, 69.1, -45, 0.6, 0.1],
            [15.1, 69.1, -45, 0.6, 0.1],
            [17, 69.1, -45, 0.6, 0.1],
            [18.9, 69.1, -45, 0.6, 0.1],
            [20.699999999999997, 69.1, -45, 0.6, 0.1],
            [22.7, 69.1, -45, 0.6, 0.1],

            [9.5, 92, rad(45), 0.25, 0.25],
            [12.75, 92, rad(45), 0.25, 0.25],
            [16, 92, rad(45), 0.25, 0.25],
            [19.25, 92, rad(45), 0.25, 0.25],
            [22.5, 92, rad(45), 0.25, 0.25],

            [11, 95, rad(45), 0.25, 0.25],
            [14.25, 95, rad(45), 0.25, 0.25],
            [17.5, 95, rad(45), 0.25, 0.25],
            [20.75, 95, rad(45), 0.25, 0.25],

            [9.5, 98, rad(45), 0.25, 0.25],
            [12.75, 98, rad(45), 0.25, 0.25],
            [16, 98, rad(45), 0.25, 0.25],
            [19.25, 98, rad(45), 0.25, 0.25],
            [22.5, 98, rad(45), 0.25, 0.25],

        ],
        wheels: [
            // x, y, power, centerx, centery
            [8, 75, 3.5],
            [12, 75, -3.5],
            [16, 75, 3.5],
            [20, 75, -3.5],
            [24, 75, 3.5],

            [14.0, 106.75, -1.2],
        ]
    },
    {
        title: 'BubblePop',
        goalY: 83,
        zoomY: 78,
        walls: [
            [ // left
                [16.5, -300],
                [9.25, -300],
                [9.25, 0],
                [9.25, 43],
                [4.25, 50],
                [9.25, 53],
                [9.25, 75],
                [12, 80],
                [12, 83],
            ],
            [ // right
                [16.5, -300],
                [16.5, 50],
                [19.5, 54],
                [18.5, 56],
                [19.5, 58],
                [16.5, 61],
                [16.5, 75],
                [13, 80],
                [13, 83],
            ],
            [
                [16.5, 52.5],
                [17.5, 54],
                [16.5, 56],
                [17.5, 58],
                [16.5, 59],
                [15.5, 56],
                [16.5, 52.5],
            ],
            [
                [9.25, 45.5],
                [6.25, 49.5],
                [9.25, 51],
                [14.5, 50.5],
                [9.25, 45.5],
            ],
            [
                [9.25, 26], [11.0625, 27.5]
            ],
            [
                [16.5, 26], [14.6875, 27.5]
            ],
            [
                [11.0625, 30], [12.875, 28.5], [14.6875, 30]
            ],
            [
                [9.25, 31], [11.0625, 32.5]
            ],
            [
                [16.5, 31], [14.6875, 32.5]
            ],
            [
                [11.0625, 35], [12.875, 33.5], [14.6875, 35]
            ],

        ],
        wheels: [
            [10.7, 10, 10, 0, 0, 0.5],
            [14.7, 10, -10, 0, 0, 0.5],
            [12.7, 10, 10, 0, 0, 0.5],

            [10.7, 14, -3],
            [14.7, 14, 3],

            [11.20, 44, -5, 0, 0, 0.5],

            [10.3, 75, 8, 0, 0, 1],
            [15.2, 75, -8, 0, 0, 1],

            // [12.175, 80, 2.5, 0, 0, 0.75],
        ],
        boxes: [
            // x, y, angle, width, height
            [9.25, 18, rad(45), 0.15, 0.15],
            [11.25, 18, rad(45), 0.15, 0.15],
            [13.25, 18, rad(45), 0.15, 0.15],
            [15.25, 18, rad(45), 0.15, 0.15],

            [10.5, 19, rad(45), 0.15, 0.15],
            [12.5, 19, rad(45), 0.15, 0.15],
            [14.5, 19, rad(45), 0.15, 0.15],
            [16.5, 19, rad(45), 0.15, 0.15],

            [9.25, 20, rad(45), 0.15, 0.15],
            [11.25, 20, rad(45), 0.15, 0.15],
            [13.25, 20, rad(45), 0.15, 0.15],
            [15.25, 20, rad(45), 0.15, 0.15],

            [10.5, 21, rad(45), 0.15, 0.15],
            [12.5, 21, rad(45), 0.15, 0.15],
            [14.5, 21, rad(45), 0.15, 0.15],
            [16.5, 21, rad(45), 0.15, 0.15],

            [9.25, 22, rad(45), 0.15, 0.15],
            [11.25, 22, rad(45), 0.15, 0.15],
            [13.25, 22, rad(45), 0.15, 0.15],
            [15.25, 22, rad(45), 0.15, 0.15],

            [10.5, 23, rad(45), 0.15, 0.15],
            [12.5, 23, rad(45), 0.15, 0.15],
            [14.5, 23, rad(45), 0.15, 0.15],
            [16.5, 23, rad(45), 0.15, 0.15],

            [9.4, 39, rad(45), 3, 3],
            [16.5, 43, rad(45), 3, 3],
        ],
        jumpers: [
            [11, 65, 0.5, true],
            [13, 65, 0.5, true],
            [15, 65, 0.5, true],

            [12, 67.5, 0.5, true],
            [14, 67.5, 0.5, true],

            [13, 71, 0.8, true],

            [10.7, 77.5, 0.8, true],
            [14.7, 77.5, 0.8, true],

            [12.625, 80, 1.5, true],
            [12.625, 80, 1.2, true],
        ]
    },
    {
        title: 'Pot of greed',
        goalY: 111,
        zoomY: 110,
        walls: [
            [
                [17, -300],
                [9, -300],
                [9, 8.5],
                [2, 15],
                [6, 61.5],
            ],
            [
                [7, 71],
                [9, 101],
                [8, 100.5],
                [6, 100],
                [5, 90],
                [4, 70],
                [7, 71],
            ],
            [
                [17, -300],
                [17, 8.5],
                [24, 15],
                [20, 61.5],
            ],
            [
                [19, 71],
                [17, 101],
                [18, 100.5],
                [20, 100],
                [21, 90],
                [22, 70],
                [19, 71],
            ],
            [
                [11, 88],
                [12, 90],
                [12, 112],
            ],
            [
                [15, 88],
                [14, 90],
                [14, 112],
            ],
            [
                [12, 102],
                [11, 103],
                [9, 104],
                [8, 104],
                [6, 103],
                [5, 102],
                [4, 100],
                [3, 90],
                [2, 70],
                [3, 65],
                [4, 63],
                [5, 62],
                [6, 61.5],
            ],
            [
                [14, 102],
                [15, 103],
                [17, 104],
                [18, 104],
                [20, 103],
                [21, 102],
                [22, 100],
                [23, 90],
                [24, 70],
                [23, 65],
                [22, 63],
                [21, 62],
                [20, 61.5],
            ],
        ],
        boxes: [
            // x, y, angle, width, height
            [13, 20, rad(45), 3, 3],
            [13, 55, rad(45), 3, 3],

            [8, 37, rad(45), 2, 2],
            [18, 37, rad(45), 2, 2],
        ],
        jumpers: [],
        wheels: [
            [11, 12, -3],
            [15, 12, 3],

            [   8, 104, -10, 0, 0, 1],
            [   6, 103, -10, 0, 0, 1.5],
            [   4, 100, -10, 0, 0, 1.5],
            [ 3.5,  95, -10],
            [   3,  90, -10],
            [2.75,  85, -10],
            [ 2.5,  80, -10],
            [2.25,  75, -10],
            [   2,  70, -10],

            [  18, 104, 10, 0, 0, 1],
            [  20, 103, 10, 0, 0, 1.5],
            [  22, 100, 10, 0, 0, 1.5],
            [22.5,  95, 10],
            [  23,  90, 10],
            [23.25,  85, 10],
            [23.5,  80, 10],
            [23.75,  75, 10],
            [  24,  70, 10],
        ],
    },

];
