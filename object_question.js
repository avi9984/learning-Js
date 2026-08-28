// You are given a JSON object that may contain nested objects and arrays at any depth.

// Write a function that converts the nested structure into a flat object where each key represents the full path to the value using dot (.) notation.

// Requirements

// Nested object keys should be joined using ..

// Array indices should be included in the path.

// Preserve primitive values (string, number, boolean, null).

// The solution should work for any level of nesting.

// Analyze the time and space complexity of your solution.


// Example 1
// Input

function flatObject(obj, result = {}, key = '') {
    if (obj === null || typeof obj !== 'object') {
        if (key) result[key] = obj
        return result
    }

    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            const newKey = key ? `${key}.${index}` : `${index}`
            flatObject(item, result, newKey)
        })
    } else {
        Object.keys(obj).forEach(k1 => {
            const newKey = key ? `${key}.${k1}` : k1
            flatObject(obj[k1], result, newKey)
        })
    }
    return result
}


const user = {
    "user": {
        "name": "John",
        "address": {
            "city": "Mumbai"
        }
    }
}
console.log(flatObject(user))

// Output
// {
//   "user.name": "John",
//   "user.address.city": "Mumbai"
// }





// Design an In-Memory Hierarchical Permission Engine

// You are building a multi-tenant SaaS platform where permissions can be assigned at 
// different levels of a hierarchy.
// Each organization has a tree structure:

// Permissions:
// {
//   "org": {
//     "allow": ["VIEW_USERS"]
//   },
//   "deptA": {
//     "allow": ["EDIT_USERS"]
//   },
//   "teamA1": {
//     "deny": ["EDIT_USERS"]
//   }
// }

// Organization
// ├── Department A
// │   ├── Team A1
// │   └── Team A2
// └── Department B
//     └── Team B1

// Permissions can be assigned at any node.
// Rules:

// A child inherits permissions from all its ancestors.

// A child can explicitly deny a permission inherited from a parent.

// A child can explicitly grant a permission not present in its ancestors.

// Permission checks must be efficient because they are called millions of times per day.

// The hierarchy can be modified at runtime (move nodes, add nodes, delete nodes).

// Input
// Hierarchy:

let hierarchy = {
    "id": "org",
    "granted": [],
    "denied": [],
    "children": [
        {
            "id": "deptA",
            "granted": [],
            "denied": [],
            "children": [
                {
                    "id": "teamA1",
                    "granted": [],
                    "denied": [],
                    children: []
                }
            ]
        }
    ]
}

function findNode(root, nodeId, parent = null) {
    if (root.id === nodeId) {
        return { node: root, parent }
    }

    for (let child of root.children || []) {
        let res = findNode(child, nodeId, root)

        if (res) {
            return res
        }
    }
    return null
}
// Requirements
// Implement:

function addNode(parentId, nodeId) {
    let res = findNode(hierarchy, parentId)
    if (!res) return false;

    res.node.children.push({ id: nodeId, granted: [], denied: [], children: [] })
    return true
}

function removeNode(nodeId) {
    let res = findNode(hierarchy, nodeId);
    if (!res) return false

    res.parent.children = res.parent.children.filter(c => c.id !== nodeId)
    return true;
}


function moveNode(nodeId, newParentId) {
    let res = findNode(hierarchy, nodeId);
    if (!res) return false;

    let newParent = findNode(hierarchy, newParentId);
    if (!newParent) return false;

    res.parent.children = res.parent.children.filter(c => c.id !== nodeId)

    newParent.node.children.push(res.node);
    return true
}

function grantPermission(nodeId, permission) {
    let res = findNode(hierarchy, nodeId);
    if (!res) return false

    if (!res.node.granted.includes(permission)) {
        res.node.granted.push(permission)
    }
    res.node.denied = res.node.denied.filter(p => p != permission)

    return true
}


function denyPermission(nodeId, permission) {
    let res = findNode(hierarchy, nodeId);
    if (!res) return false;

    if (!res.node.denied.includes(permission)) {
        res.node.denied.push(permission)
    }

    res.node.granted = res.node.granted.filter(p => p != permission)

    return true
}

function hasPermission(nodeId, permission) {
    let res = findNode(hierarchy, nodeId);
    if (!res) return false;

    let path = [];
    let current = res.node;

    while (current) {
        path.unshift(current)

        let parentRes = findNode(hierarchy, current.id)
        current = parentRes.parent
    }

    let has = false;

    for (let node of path) {
        if (node.granted.includes(permission)) has = true;
        if (node.denied.includes(permission)) has = false;
    }
    return has

}

grantPermission("org", "VIEW_USERS")
denyPermission("deptA", "EDIT_USERS")
denyPermission("org", "Delete_USERS")

// Expected Behaviour
console.log(hasPermission("teamA1", "VIEW_USERS")) // true
console.log(hasPermission("teamA1", "EDIT_USERS")) // false
console.log(hasPermission("teamA1", "Delete_USERS")) // false
