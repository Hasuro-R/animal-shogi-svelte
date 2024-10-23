<script lang="ts">
  type GridType = PieceType | null;

  let grids: GridType[][] = [
    [
      {
        name: "Giraffe",
        position: { x: 0, y: 0 },
        image: "🦒",
        player: 2,
        color: "#CCAED2",
      },
      {
        name: "Lion",
        position: { x: 1, y: 0 },
        image: "🦁",
        player: 2,
        color: "#F8B9BB",
      },
      {
        name: "Elephant",
        position: { x: 2, y: 0 },
        image: "🐘",
        player: 2,
        color: "#CCAED2",
      },
    ],
    [
      null,
      {
        name: "Chick",
        position: { x: 1, y: 2 },
        image: "🐤",
        player: 2,
        color: "#E7EDA3",
      },
      null
    ],
    [
      null,
      {
        name: "Chick",
        position: { x: 1, y: 3 },
        image: "🐤",
        player: 1,
        color: "#E7EDA3",
      },
      null
    ],
    [
      {
        name: "Elephant",
        position: { x: 0, y: 4 },
        image: "🐘",
        player: 1,
        color: "#CCAED2",
      },
      {
        name: "Lion",
        position: { x: 1, y: 4 },
        image: "🦁",
        player: 1,
        color: "#F8B9BB",
      },
      {
        name: "Giraffe",
        position: { x: 0, y: 4 },
        image: "🦒",
        player: 1,
        color: "#CCAED2",
      },
    ],
  ];

  type PieceType = {
    name: AnimalType,
    position: PositionType,
    image: string,
    player: number,
    color: string,
  };

  type AnimalType = 'Lion' | 'Elephant' | 'Chicken' | 'Chick' | 'Giraffe';

  type PositionType = {
    x: number,
    y: number,
  };

</script>

<body>
  <div class="container">
    <p class="title">動物将棋だお</p>
    <div class="board">
      {#each grids as row, i (i)}
        <div class="board-row">
          {#each row as grid, i (i)}
            <div class="grid">
              {#if grid !== null}
                <div
                  class="grid-item"
                  style="background-color:{grid.color};rotate:{grid.player === 2 ? 180 : 0}deg;"
                >
                  {grid.image}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</body>

<style>
  :root {
    --text-color: #333;

    --grid-size: 6rem;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    color: var(--text-color);
  }

  .container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
  }

  .board {
    width: calc(var(--grid-size) * 3);
    height: calc(var(--grid-size) * 4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .board-row {
    width: 100%;
    height: var(--grid-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid {
    box-sizing: border-box;
    width: var(--grid-size);
    height: var(--grid-size);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border: 1px dashed #ccc;
  }

  .grid-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    border-radius: 0.3rem;
  }
</style>
