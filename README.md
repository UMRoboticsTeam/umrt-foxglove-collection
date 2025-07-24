# umrt-foxglove-collection

A collection of the Foxglove extensions used my the University of Manitoba Robotics Team.

Each extension is managed as a **Git submodule**.


---


# Usage

To clone all the extensions, run:

```bash
git clone --recurse-submodules https://github.com/UMRoboticsTeam/umrt-foxglove-collection.git
```

If you've cloned the repo without `--recurse-submodules`, you can run:
```bash
git submodule update --init --recurseive
```


# Updating Submodules

To fetch the latest commits from each submodule, run:
```bash
git submodule foreach git pull origin main
```


# Foxglove commands
To install all dependencies in every package, run:
```bash
npm run install-all
```

To install all extensions to your local desktop Foxglove app, run:
```bash
npm run local-install-all
```

To build all extensions and verify compilation, run:
```bash
npm run build-all
```

