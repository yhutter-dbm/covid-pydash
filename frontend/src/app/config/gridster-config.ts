import { CompactType, DisplayGrid, GridType } from "angular-gridster2";

export class GridsterConfig {
    public static readonly DEFAULT = {
        gridType: GridType.Fixed,
        compactType: CompactType.None,
        margin: 20,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        useTransformPositioning: true,
        mobileBreakpoint: 640,
        useBodyForBreakpoint: false,
        minCols: 1,
        maxCols: 100,
        minRows: 1,
        maxRows: 100,
        maxItemCols: 100,
        minItemCols: 1,
        maxItemRows: 100,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 1,
        defaultItemRows: 1,
        fixedColWidth: 100,
        fixedRowHeight: 100,
        keepFixedHeightInMobile: false,
        keepFixedWidthInMobile: false,
        scrollSensitivity: 10,
        scrollSpeed: 20,
        enableEmptyCellClick: false,
        enableEmptyCellContextMenu: false,
        enableEmptyCellDrop: false,
        enableEmptyCellDrag: false,
        enableOccupiedCellDrop: false,
        emptyCellDragMaxCols: 50,
        emptyCellDragMaxRows: 50,
        ignoreMarginInRow: false,
        draggable: {
            enabled: true
        },
        resizable: {
            enabled: true
        },
        swap: false,
        pushItems: true,
        disablePushOnDrag: false,
        disablePushOnResize: false,
        pushDirections: { north: true, east: true, south: true, west: true },
        pushResizeItems: false,
        displayGrid: DisplayGrid.None,
        disableWindowResize: false,
        disableWarnings: false,
        scrollToNewItems: false
    };
}