import "./App.css";

function App() {
  // add funcitions here...
  const openModal = () => {
    console.log("clicked");
  };

  // sillabus:
  // 1. variables
  // 2. functions (input e output)
  // 3. scope e closures
  // 4. for loop (for, foreach e map)

  return (
    <>
      <div class="wrap">
        <header>
          <div class="title-block">
            <h1>Do Now</h1>
            <p>Your work, sorted by what actually needs you first.</p>
          </div>
          <div class="header-actions">
            <div
              class="view-toggle"
              role="tablist"
              aria-label="View"
            >
              <button
                type="button"
                id="tab-board"
                class="active"
              >
                Board
              </button>
              <button
                type="button"
                id="tab-list"
              >
                List
              </button>
            </div>

            {/*   document.getElementById("btn-add").addEventListener("click", openModal); */}
            <button
              onClick={openModal}
              type="button"
              class="btn btn-primary"
              id="btn-addss"
            >
              + Add task
            </button>
          </div>
        </header>

        <div
          id="notice"
          class="notice"
          hidden
        ></div>

        <div
          id="spotlight"
          class="spotlight empty"
        >
          Loading your board&hellip;
        </div>

        <div
          id="stats"
          class="stats"
          hidden
        ></div>

        <div
          id="board-view"
          class="board"
        ></div>
        <div
          id="list-view"
          class="list"
          hidden
        ></div>

        <div
          id="empty-state"
          class="empty-state"
          hidden
        >
          <h3>Nothing on the board yet</h3>
          <p>
            Add what's on your plate and Do&nbsp;Now will tell you where to
            start.
          </p>
        </div>

        <button
          type="button"
          class="completed-toggle"
          id="completed-toggle"
          hidden
        >
          <span id="completed-caret">▸</span>
          <span id="completed-count">0 completed</span>
        </button>
        <div
          class="completed-list"
          id="completed-list"
          hidden
        ></div>
      </div>

      <div
        class="overlay"
        id="overlay"
        hidden
      >
        <div class="modal">
          <h2 id="modal-title">Add task</h2>
          <form id="task-form">
            <div class="field">
              <label for="f-title">Task name</label>
              <input
                type="text"
                id="f-title"
                maxlength="120"
                required
                placeholder="e.g. Reply to the Milan salon escalation"
              />
            </div>
            <div class="field">
              <label for="f-desc">Description</label>
              <textarea
                id="f-desc"
                maxlength="600"
                placeholder="Any detail you'll want later"
              ></textarea>
            </div>
            <div class="field">
              <label>Priority</label>
              <div class="priority-select">
                <button
                  type="button"
                  class="sel-high"
                  data-p="high"
                >
                  High
                </button>
                <button
                  type="button"
                  class="sel-medium"
                  data-p="medium"
                >
                  Medium
                </button>
                <button
                  type="button"
                  class="sel-low"
                  data-p="low"
                >
                  Low
                </button>
              </div>
            </div>
            <div class="field">
              <label for="f-time">Estimated time</label>
              <div class="time-row">
                <input
                  type="number"
                  id="f-time"
                  min="1"
                  max="999"
                  value="30"
                  required
                />
                <select id="f-unit">
                  <option value="min">minutes</option>
                  <option value="hr">hours</option>
                </select>
              </div>
            </div>
            <div class="modal-actions">
              <button
                type="button"
                class="btn btn-ghost"
                id="btn-cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                id="btn-save"
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
